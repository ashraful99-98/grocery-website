import React from 'react';


import './PlaceOrder.css';
const PlaceOrder = () => {
  return (
    <div class="container">
      <div class="payment-method">
        <h1>Grocery Mart</h1>
        <p class="payment-p"><span>Contact information</span><span>Already have an account?<a href='login.html'>Log in</a></span></p>
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <h4>Shipping address</h4>
          </div>
          <div class="col-8">
            <label for="inputAddress" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Name" />
          </div>
          <div class="col-8">
            <label for="inputAddress2" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Address" />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Amborkhana</option>
              <option>ShahiEidgha</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Save this information for next time
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="payment-btn">Continue to shipping</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;

