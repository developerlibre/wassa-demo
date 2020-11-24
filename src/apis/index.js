
import {camelizeKeys} from 'humps'

/**
 * Fetch api endpoint
 * @param {String} endpoint Endpoint api
 * @param {String} method method in list method http accept
 * @param {Object} params Param to fetch
 * @param {String} accessToken Access token to auth
 * @return {Object} Object response
 */
function callApi (endpoint, method = 'get', params, accessToken = null) {
  const fullUrl = endpoint

  let options = {}
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  /*
   * If (accessToken) {
   *   Headers['Authorization'] = `Bearer ${accessToken}`;
   * }
   */

  options = {
    method,
    headers,
    'timeout': 60000
  }

  /*
   * If (method === 'get') {
   *    If (Object.keys(params).length > 0) {
   *      FullUrl = Define.url(endpoint, parameters);
   *    }
   * } else {
   *  Options.body = JSON.stringify(parameters);
   * }
   */

  return fetch(fullUrl, options)
    .then((response) => response.json().then((json) => ({json, response})))
    .then(({json, response}) => {
      if (
        !response.ok ||
        (json.code && json.code !== 200)
      ) {
        return Promise.reject(json)
      }

      const camelizedJson = camelizeKeys(json)

      return camelizedJson
    })
    .then(
      (response) => ({response}),
      (error) => {
        console.log('error call api', error)
        if (error.message === 'Network request failed') {
          throw new Error(999) // No network
        } else {
          throw new Error(error.code || 'Something bad happened')
        }
      }
    )
}

export const getAboutHeading = (params) => callApi('/mock/about-heading.json', 'get', params)
export const getAboutWasshaValues = (params) => callApi('/mock/about-wassha-values.json', 'get', params)
export const getFooter = (params) => callApi('/mock/footer.json', 'get', params)
export const getHome = (params) => callApi('/mock/home.json', 'get', params)
export const getAboutOurPartners = (params) => callApi('/mock/about-ourpartners.json', 'get', params)
export const getNews = (url, params) => callApi(url, 'get', params)
export const getCareerJP = (params) => callApi('/mock/careers-jp.json', 'get', params)
export const getCareerTanzania = (params) => callApi('/mock/careers-tanzania.json', 'get', params)
export const getJobDescription = (params) => callApi('/mock/job-description.json', 'get', params)
export const getOptionForm = (params) => callApi('/mock/contact-input.json', 'get', params)
export const getImpact = (params) => callApi('/mock/impact.json', 'get', params)
