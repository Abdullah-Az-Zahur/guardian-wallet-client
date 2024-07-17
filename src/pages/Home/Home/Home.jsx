import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, loading, setLoading } = useAuth();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {/* Sent Money Card */}
      <div className="card bg-base-100  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Sent Money</h2>
          <p>
            Forevery transaction over 100 taka, You have to pay a fee of 5 Taka.
          </p>
          <div className="card-actions justify-end">
            <Link to="/SentMoney" button className="btn btn-primary">
              Now
            </Link>
          </div>
        </div>
      </div>

      {/*  Cash-Out Catd */}
      <div className="card bg-base-100  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Cash-Out</h2>
          <p>
            {" "}
            Forevery cash out, there will be a fee which is 1.5% of the
            transaction amount
          </p>
          <div className="card-actions justify-end">
            <Link to="/CashOut" button className="btn btn-primary">
              Now
            </Link>
          </div>
        </div>
      </div>

      {/*  Cash-in Card */}
      <div className="card bg-base-100  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Cash-in</h2>
          <p>You can cash-in through agents without a fee</p>
          <div className="card-actions justify-end">
            <Link to="/CashIn" button className="btn btn-primary">
              Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
