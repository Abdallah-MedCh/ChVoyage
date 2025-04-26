'use strict';

module.exports = {
  routes: [
    {
      method: 'DELETE',
      path: '/carts/:id',
      handler: 'cart.customDelete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/carts',
      handler: 'cart.find',
    },
    {
      method: 'GET',
      path: '/carts/:id',
      handler: 'cart.findOne',
    },
    {
      method: 'POST',
      path: '/carts',
      handler: 'cart.create',
    },
    {
      method: 'PUT',
      path: '/carts/:id',
      handler: 'cart.update',
    },
  ],
};

