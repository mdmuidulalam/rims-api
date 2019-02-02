var nodeCache = require('node-cache');

class cache {
    constructor(ttl) {
        this.cache = new nodeCache({stdTTL: ttl, checkperiod: ttl*0.2});
    }
  
    set(key, obj) {
        return new Promise((resolve,reject) => {
            this.cache.set( key, obj, function( err, success ) {
                if(err) {
                    reject(err);
                } if( success ) {
                    resolve(obj);
                }
            });
        });
    }

    get(key) {
        return new Promise((resolve,reject) => {
            this.cache.get( key, function( err, value ) {
                if( err || value == undefined) {
                    if(err) {
                        reject(err);
                    } else {
                        reject("Value Not found");
                    }
                } else  {
                    resolve(value);
                }
            });
        });
    }
  
    delete(key) {
        return new Promise((resolve,reject) => {
            this.cache.del( key, function( err, count ) {
                if( err ) {
                    reject(err);
                } else {
                    resolve('key deleted');
                }
            });
        });
    }
}

module.exports = cache