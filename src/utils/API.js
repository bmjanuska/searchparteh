import axios from "axios";

export default {
 getPlace: function(place) {
 // var APIKey = process.env.REACT_APP_MAPS_API_KEY;
   //  var APIKey = "AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0";
   // return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + APIKey);
   return axios.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + "AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0");
 }
};