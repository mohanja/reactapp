import './card.css';
import Card from './card.js';



import './card.css';
import { BsCheckLg} from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

function Card(){
    return(
        <section class="pricing py-5">

        <div className='cotainer'>
<div className='row'>
<Box/>
<Plus/>
<Pro/>
</div>
       </div>
       </section>
    )
}

function Box(){
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div className='card-body' >
            <div class="mine">
            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
           <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Single User</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>5GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Community Access</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"><BsXLg/></i></span>Unlimited
                Private Projects</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"><BsXLg/></i></span>Dedicated
                Phone Support</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"><BsXLg/></i></span>Free Subdomain
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"><BsXLg/></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}


function Plus(){
    return(
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">

          <div class="card-body">
          <div class="mine">
            <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span><strong>5 Users</strong></li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>50GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Free Subdomain</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"><BsXLg/></i></span>Monthly Status
                Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
}

function Pro(){
    return(
        <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
          <div class="mine">
            <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
            <hr></hr>
              <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>150GB Storage</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Unlimited Public Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Community Access</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Unlimited Private Projects</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Dedicated Phone Support</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span class="fa-li"><i class="fas fa-check"><BsCheckLg/></i></span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary">Button</a>
            </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Card;