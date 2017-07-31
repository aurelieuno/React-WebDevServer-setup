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

fetchPlayer(players) {
    const player1= players.player1;
    const player2= players.player2;

    function getUserData(player) {
    return axios.get(`https://api.github.com/users/${player}`);
    }

    return axios.all([getUserData(player1), getUserData(player2)])
    .then(axios.spread(function (data1,data2) {
        return {player1 : data1.data, player2: data2.data}
            }))
    .catch(function (error) {
         console.log(error);
     });
}

}