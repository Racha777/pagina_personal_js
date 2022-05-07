const profile = (profileData,technologiesData) => {
  const {name, slogan, description, urlCv}=profileData;

  const profileInfo = document.querySelector(".profile__info");
  const profileFigure = document.querySelector(".profile__figure");

  const profileInfoTitle = document.querySelector(".profile__info-title");
  const profileInfoSubtitle = document.querySelector(".profile__info-subtitle");
  const profileInfoDescription = document.querySelector(
    ".profile__info-description"
  );
  const profileInfoLink = document.querySelector(".profile__info-link");
  const profileInfoLinkProjects=document.querySelector('.profile__info-link--active');

  profileInfoTitle.innerHTML=name;
  profileInfoSubtitle.innerHTML=slogan;
  profileInfoDescription.innerHTML=description;
  profileInfoLink.innerHTML='CV';
  profileInfoLink.href=urlCv;
  profileInfoLinkProjects.innerHTML='Proyectos';

  document.querySelector('.profile__figure-tech-one').src=technologiesData[0].image;
  document.querySelector('.profile__figure-tech-one').alt=technologiesData[0].name;
  document.querySelector('.profile__figure-tech-two').src=technologiesData[1].image;
  document.querySelector('.profile__figure-tech-two').alt=technologiesData[1].name;
  document.querySelector('.profile__figure-tech-three').src=technologiesData[2].image;
  document.querySelector('.profile__figure-tech-three').alt=technologiesData[2].name;
  document.querySelector('.profile__figure-tech-four').src=technologiesData[3].image;
  document.querySelector('.profile__figure-tech-four').alt=technologiesData[3].name;

  const documentScroll = () => {
    profileInfo.style.marginTop = `-${scrollY}px`;
    profileFigure.style.marginTop = `-${scrollY}px`;
  };

  document.addEventListener("scroll", documentScroll);
};

export default profile;
