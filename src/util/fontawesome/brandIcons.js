import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faAmazon,
  faAudible,
  faBitcoin,
  faFacebook,
  faInstagram,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const brandIcons = () =>
  library.add(
    faBitcoin,
    faFacebook,
    faInstagram,
    faTwitch,
    faTwitter,
    faAmazon,
    faAudible
  );

export default brandIcons;
