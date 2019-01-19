import {
  observable, computed, action, decorate,
} from 'mobx';

class AppStore {
  products = null;

  isActiveMenu = false;

  productSize = 320;

  isShowProductDescription = true;

  accessToken = null;

  get bigProducts() {
    if (this.products === null) {
      return null;
    }

    return this.products.filter(p => p.carat >= 0.04);
  }

  handleProductClick(id) {
    // console.log(id);
  }

  toggleActiveMenu() {
    this.isActiveMenu = !this.isActiveMenu;
  }

  changeProductSize(newSize) {
    this.productSize = newSize;
  }

  toggleShowProductDescription() {
    this.isShowProductDescription = !this.isShowProductDescription;
  }

  auth() {
    const accessTokenFromStorage = localStorage.getItem('accessToken');

    if (accessTokenFromStorage) {
      this.accessToken = accessTokenFromStorage;
      return Promise.resolve(accessTokenFromStorage);
    }

    return fetch(`https://api.cutwise.com/api/oauth/v2/token?grant_type=password&username=${USERNAME}&password=${PASSWORD}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then((authResponseAsJSON) => {
        this.accessToken = authResponseAsJSON.access_token;
        localStorage.setItem('accessToken', this.accessToken);
      })
      .catch(error => console.error('Error:', error));
  }

  fetchProductsWithAuth = () => {
    const constantsPromise = fetch('https://api.cutwise.com/v2/constants', {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    }).then(res => res.json());

    const diamondsPromise = fetch('https://api.cutwise.com/api/v3/diamond?limit=8&offset=0&isPublished=1', {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    }).then(res => res.json());

    return Promise.all([constantsPromise, diamondsPromise]).then(([constants, diamonds]) => {
      this.products = diamonds.map(d => ({
        id: d.id,
        carat: d.carat,
        cutShape: constants.dict.cutShape.find(cutShape => cutShape.id === d.cutShape),
        // eslint-disable-next-line no-underscore-dangle
        description: d.sku,
        price: d.price,
        pricePerCarat: d.price && d.carat ? d.price / d.carat : null,
      }));
    });
  };
}

export default decorate(AppStore, {
  products: observable,
  isActiveMenu: observable,
  bigProducts: computed,
  handleProductClick: action,
  toggleActiveMenu: action,
  changeProductSize: action,
  productSize: observable,
  toggleShowProductDescription: action,
  isShowProductDescription: observable,
});
