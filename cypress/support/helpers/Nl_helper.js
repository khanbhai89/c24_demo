class Nl_helper {

    /**
     * Extract parameter value from list of links
     * @param  {Array} links - List of links (string)
     * @param  {string} parameterName - For example 'wpset'
     * @return {Array} - List of link and parameter value
     * */
    extractParameterValues = (links, parameterName) => {
        /** @type {URL} */
        let linkUrl;
        /** @type {*[]} */
        let result = [];

        for (let i = 0; i < links.length; i++) {
            linkUrl = new URL(links[i].toString());
            result.push({ link: linkUrl.href, parameterValue: linkUrl.searchParams.get(parameterName) });
        }

        return result;
    }

    /**
    * Returns an library of Params
    * @param {string} url - Url to be Parsed
    * @return {library} - returns params
    **/
    getParamFromUrl = (url) => {
        cy.log(url)

        const arr = url.split('?target=')[1].split('&');
        const paramObj = {};

        arr.forEach(params => {
            const [key, value] = params.split('=');
            paramObj[key] = value;
        });

        return paramObj;
    }

    /**
     * Returns a data object from a given fixture
     * @param  {string} fixture - fixture name
     * @return {JSON}
     * */
    getTestData = (fixture) => require('../../fixtures/' + fixture);


}
export default Nl_helper;