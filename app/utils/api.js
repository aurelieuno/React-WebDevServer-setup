import axios from "axios";

module.exports = {
    fetchAPI(language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

        return axios.get(encodedURI)
        .then(function (response) {
        return response.data.items;
      })
      .catch(function (error) {
        console.log(error);
  });
    },

    fetchPlayer(player) {
        var encodedURI = `https://api.github.com/users/${player}`;

        return axios.get(encodedURI)
        .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
  });
    }
}

/*return a
Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.*/

