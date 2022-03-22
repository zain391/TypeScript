interface add{
        street: string,
          suite:  string,
          city: string,
          zipcode:  string,
          geo:geos,
}
interface geos{
        "lat": string,
            "lng": string,
}
interface monster{
        id:number,
        name: string,
        username: string,
        email: string,
        address:add= {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          geo= {
            "lat": "-37.3159",
            "lng": "81.1496",
}
        