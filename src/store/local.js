/*!
 * TroopJS store/local module
 * @license TroopJS 0.0.1 Copyright 2012, Mikael Karon <mikael@karon.se>
 * Released under the MIT license.
 */
define([ "compose", "./base" ], function StoreLocalModule(Compose, Store) {

	return Compose.create(Store, {
		displayName : "core/store/local",

		storage : window.localStorage
	});
});