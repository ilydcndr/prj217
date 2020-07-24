import {AIRTABLE_API_KEY,CUSTOMER_BASE_KEY,SUGGESTION_BASE_KEY,CARRIER_BASE_KEY} from './AirTableBilgi'

const createAirtable = (data) => {
  var Airtable = require('airtable');
  let base,Fields
  
  if (data.Purpose === "Müşteri") {
    base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(CUSTOMER_BASE_KEY);
    const CustomerBase = {
      "İsim": data.Name,
      "Soyisim": data.Surname,
      "Doğum Tarihi": data.BirthDate,
      "Eğitim Durumu": data.School,
      "Telefon": data.Phone,
      "Email": data.Email,
      "Amaç": data.Purpose,
      "Okuduğunuz Bölüm": data.Departmant,
      "Mezuniyet Durumunuz": data.Status,
      "Mezuniyet Yılınız": data.Graduate,
      "Deneyim": data.Experience
    }
    Fields = CustomerBase
  }
  else if (data.Purpose === "Kariyer") {
   base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(CARRIER_BASE_KEY);
    const CarrierBase = {
      "İsim": data.Name,
      "Soyisim": data.Surname,
      "Doğum Tarihi": data.BirthDate,
      "Eğitim Durumu": data.School,
      "Telefon": data.Phone,
      "Email": data.Email,
      "Amaç": data.Purpose,
      "Mezun Olduğunuz Bölüm": data.Departmant,
      "Mezuniyet Yılınız": data.Graduate,
      "Uzmanlık Alanınız": data.Speciality,
      "Deneyim": data.Experience}
      Fields = CarrierBase

  }
  else if (data.Purpose === "Görüş") {
   base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(SUGGESTION_BASE_KEY);
    const SuggestionBase = {
      "İsim": data.Name,
      "Soyisim": data.Surname,
      "Doğum Tarihi": data.BirthDate,
      "Eğitim Durumu": data.School,
      "Telefon": data.Phone,
      "Email": data.Email,
      "Amaç": data.Purpose,
      "Görüş": data.Suggestion}
      Fields = SuggestionBase
  }
  base(data.Purpose).create(
    Fields
    , function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      else {
        console.log("done")
      }
    });
}

export default createAirtable;