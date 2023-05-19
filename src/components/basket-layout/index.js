
import React from "react";
import './style.css';
import PropTypes from "prop-types";
import Head from "../head";

function BasketLayout() {
    return (
        <Head title='Корзина'/>
    )
}

BasketLayout.propTypes = {
    children: PropTypes.node
  }

  export default React.memo(BasketLayout);