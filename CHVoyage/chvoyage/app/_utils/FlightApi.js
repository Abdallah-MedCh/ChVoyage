import axios from 'axios';
const apiUrl= 'https://google-flights4.p.rapidapi.com/flights/search-roundtrip'
const apiKey=process.env.x_rapidapi_Key

export const fetchFlights = async (payload) => {
  const options = {
    method: 'GET',
    url: apiUrl,
    params: payload,
    headers: {
       'x-rapidapi-key': 'd4851831dcmsh5723bcc01fd81fap142547jsn4c97db66b1df',
      'x-rapidapi-host': 'google-flights4.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};

export const fetchFlightDetails = async (flightId) => {

    const response = await fetchFlightDetailsID(flightId)
    console.log('Flight details:', response);
    const options = {
      method: 'GET',
      url: 'https://google-flights4.p.rapidapi.com/flights/get-booking-results',
      params: {
        detailToken: response,
      },
      headers: {
        'x-rapidapi-key': 'd4851831dcmsh5723bcc01fd81fap142547jsn4c97db66b1df',
        'x-rapidapi-host': 'google-flights4.p.rapidapi.com'
      }
    };
    
    try {
        const fd = await axios.request(options);
        return fd.data.data.bookingOptions[0].bookingLink[0].link
    } catch (error) {
        console.error(error);
        throw error;
    }


}


export const fetchFlightDetailsID = async (flightId) => {
    //console.log('Flight ID:', flightId);

    const options = {
        method: 'GET',
        url: 'https://google-flights4.p.rapidapi.com/flights/roundtrip-returning',
        params: {
            returningToken: flightId.returningToken,
            arrivalDate: flightId.arrivalDate,
            currency: 'DZD',

          },
        headers: {
          'x-rapidapi-key': 'd4851831dcmsh5723bcc01fd81fap142547jsn4c97db66b1df',
          'x-rapidapi-host': 'google-flights4.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          //console.log('Flight details:', response.data.data.topFlights[0].detailToken);
          return response.data.data.topFlights[0].detailToken;
      } catch (error) {
          console.error(error);
      }


}