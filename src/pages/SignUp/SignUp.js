import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjThree } from './Data';
import fire from '../../Login/firebase'
import {
 NavItem,
} from '../../components/Navbar/Navbar.elements';

function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} /> */}
      <NavItem>

        <input className="btn solid" type="submit" value="Logout" onClick={fire.auth().signOut()} />

      </NavItem>
    </>
  );
}

export default SignUp;
