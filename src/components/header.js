import React from "react";
import { Link } from 'react-router-dom';
import { Button, PageHeader } from "antd";

const Header = () => {

  return (
    <div className="site-page-header-responsive">
      <PageHeader
        ghost={false}
        // onBack={() => window.history.back()}
        title="Book Keeper"
        subTitle="An Expense Manager"
        extra={[
          <Link to="/signin"><Button key="2" >Sign In</Button></Link>,
          <Link to="/signup"><Button key="1" type="primary" >Sign Up</Button></Link>,
        ]}
      >
      </PageHeader>
    </div>
  );
};

export default Header;
