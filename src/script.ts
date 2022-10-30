import { User } from "./User";
import { Company } from "./Company";
import { CustomMaps } from "./CustomMaps";

const user = new User
const company = new Company
const customMaps = new CustomMaps("map")
customMaps.addMarker(user)
customMaps.addMarker(company)