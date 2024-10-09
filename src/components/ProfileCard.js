import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
     <h2 className="profile-name">
        Hola, <span>Soy Yeny Villalba</span>
      </h2>
      <p className="profile-description">
        Desarrolladora en formación,
        me gusta salir a conocer pueblitos con mi esposo y mi perro Lucas.
      </p>
    </div>
  );
};

export default ProfileCard;