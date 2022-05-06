import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { getUsers } from '../../services/homeService';
import "../../assets/styles/home.css"
import { logout } from '../../services/authService';

function Home(props: any) {
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async (page?: number) => {
    await props.getUsers(page)
  }

  const onLogout = async () => {
    await props.logout();
    props.history.push("/login");
  }

  const { userList = [], nextPage, totalRecords } = props.home || {};
  return (
    <div>
      <div className='d-flex justify-content-between px-3 py-2 shadow-lg  fixed-top bg-success'>
        <div className='h2 text-white'>
          User
        </div>
        <div>
          <button className='btn btn-outline-light' onClick={onLogout}>Logout</button>
        </div>

      </div>
      <InfiniteScroll
        dataLength={userList.length}
        next={() => { loadData(nextPage) }}
        hasMore={userList.length < totalRecords}
        loader={<div className='h2 text-center pb-5 mt-5 text-white wrapper'>Loading...</div>}
      >
        <div className='d-flex justify-content-center px-5 flex-column mt-5'>
          {userList.map((item: any, i: number) => {
            return (
              <Card className='px-5 py-4 my-4 shadow-lg' key={i}>
                <Row>
                  <Col lg={2} md={2} sm={2} xs={12} ><img src={item.picture} alt="Profile" className="avtar" /></Col>
                  <Col lg={10} md={10} sm={10} xs={12}>{item.firstName} {item.lastName}</Col>
                </Row>
              </Card>
            )
          })}
        </div>
      </InfiniteScroll>

    </div>
  );
}

Home.propTypes = {
  home: PropTypes.object.isRequired
};

const mapStateToProps = (state: any) => ({
  home: state.home,
})

export default connect(mapStateToProps, {
  getUsers,
  logout
})(Home);
