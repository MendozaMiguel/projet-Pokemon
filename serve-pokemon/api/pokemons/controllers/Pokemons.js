'use strict';

/**
 * Pokemons.js controller
 *
 * @description: A set of functions called "actions" for managing `Pokemons`.
 */

module.exports = {

  /**
   * Retrieve pokemons records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.pokemons.search(ctx.query);
    } else {
      return strapi.services.pokemons.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a pokemons record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pokemons.fetch(ctx.params);
  },

  /**
   * Count pokemons records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pokemons.count(ctx.query);
  },

  /**
   * Create a/an pokemons record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pokemons.add(ctx.request.body);
  },

  /**
   * Update a/an pokemons record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pokemons.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pokemons record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pokemons.remove(ctx.params);
  }
};
