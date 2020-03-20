import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import NetworkWifiIcon from "@material-ui/icons/NetworkWifi";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

import { theme } from "../../../theme/default";

const headerLinks = [
  {
    label: "EBC",
    link: "#about",
  },
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "About Us",
    link: "#company",
  },
  {
    label: "Contact",
    link: "#contact-us",
  },
];

const aboutDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras fringilla ligula et leo ultrices, eu placerat nulla sollicitudin. 
Quisque ornare tellus fringilla tellus eleifend, quis ullamcorper enim pellentesque. 
Praesent tempus dolor odio, et suscipit massa vehicula ut. 
Vestibulum sagittis at mauris at accumsan. Sed nec hendrerit eros. 
Curabitur nisi augue, ultrices non aliquam nec, consequat in augue. 
Nunc vel leo vel tortor vestibulum feugiat.

Proin condimentum quis est ut bibendum. Mauris viverra eu urna id mattis. 
In non quam velit. Cras sapien nunc, pellentesque nec efficitur at, varius vel risus. 
Pellentesque orci erat, sagittis auctor ullamcorper sit amet, cursus ultricies est. 
Proin neque eros, sollicitudin fermentum odio eget, consequat interdum massa. 
Praesent faucibus metus non nunc aliquet hendrerit dignissim vel risus. 
Ut malesuada, nisl nec tempus porttitor, purus leo tempor mi, in cursus mauris diam nec enim. 
Curabitur quis molestie tortor, molestie sollicitudin nunc. Etiam dapibus, sem quis mollis gravida,`;

const styles = {
  icon: { fontSize: "5rem", color: theme.secondary },
};

const featuresData = [
  {
    logo: <AccountBalanceIcon style={styles.icon} />,
    title: "Accountable",
    description: "asd123",
  },
  {
    logo: <AccountTreeIcon style={styles.icon} />,
    title: "Integrated",
    description:
      "Compatible and integrated with Machine Learning technologies.",
  },
  {
    logo: <ShoppingCartIcon style={styles.icon} />,
    title: "Shoppable",
    description: "lalala",
  },
  {
    logo: <MonetizationOnIcon style={styles.icon} />,
    title: "Valuable",
    description: "lalala",
  },
  {
    logo: <NetworkWifiIcon style={styles.icon} />,
    title: "Availability",
    description: "Available everywhere anywhere you are.",
  },
  {
    logo: <VerifiedUserIcon style={styles.icon} />,
    title: "Secured",
    description: "lalala",
  },
];

export { featuresData, headerLinks, aboutDescription };
