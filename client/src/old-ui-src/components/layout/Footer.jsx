import React, { Fragment } from "react";
import { theme } from "../theme/default";
import CopyRight from "../utils/Copyright";

const Footer = () => {
  const styles = {
    bg: {
      display: "table",
      background: theme.dark,
      color: "white",
      height: "50px",
      width: "100%",
      marginTop: "-50px",
    },
    middle: {
      display: "table-cell",
      verticalAlign: "middle",
    },
  };

  return (
    <Fragment>
      <div style={styles.bg}>
        <div style={styles.middle}>
          <CopyRight invert={true} />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
