class baseData {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }

    getSequelizeQuery(query){
        for( let key in query) {
            if(!key.startsWith('$')) {
                if(query.hasOwnProperty('$' + key)) {
                    let value = query[key];
                    query[key] = { };
                    query[key][query['$' + key]] = value;
                    delete query['$' + key];
                } else {
                    let value = query[key];
                    query[key] = { };
                    query[key]['$eq'] = value;
                }
            }   
        }
        return query;
    }
}

module.exports = baseData;