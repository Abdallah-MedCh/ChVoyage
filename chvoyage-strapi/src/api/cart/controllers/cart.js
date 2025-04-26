'use strict';

/**
 * cart controller

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cart.cart');
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::cart.cart', ({ strapi }) => ({
  async customDelete(ctx) {
    const { id } = ctx.params;

    try {
      const deleted = await strapi.entityService.delete('api::cart.cart', id);
      ctx.send({ message: 'Deleted', deleted });
    } catch (err) {
      ctx.throw(500, `Delete failed: ${err.message}`);
    }
  },
}));
