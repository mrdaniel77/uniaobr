const token = 'ec9f336a7fe1436e8ed224bdcbb6d312';

const getCompeticoes = async (callback) => {

    const cabecalho = {
        method: "GET",
        headers:{
            'X-Auth-Token': token
        }
    }

    const feedHTTP = await(fetch("http://api.football-data.org/v2/competitions/2013/teams", cabecalho));
    const respostaJson = await feedHTTP.json();
    console.log(respostaJson.teams)
    callback(respostaJson.teams);

}

export default getCompeticoes;