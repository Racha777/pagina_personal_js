"use strict";
import {
  contacts as contactsData,
  profile as profileData,
  technologies as technologiesData,
  experiences as experiencesData,
  projects as projectsData,
  skills as skillsData,
} from "../utils/portafolio.js";
import header from "./header.js";
import footer from "./footer.js";
import profile from "./profile.js";

const documentReady = () => {
  header();
  profile(profileData, technologiesData);
  footer(contactsData);
};

document.addEventListener("DOMContentLoaded", documentReady);
