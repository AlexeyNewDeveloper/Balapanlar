import './index.css';
import { 
  headerElement, 
  partnersList,
  paramsSectionPartners,
  paramsSectionCourses,
 } from './components/constants.js';
import { Header } from './components/header.js';
import { SectionPartners } from './components/SectionPartners.js';
import { SectionCourses } from './components/SectionCourses.js';
import {scroll} from './components/scroll.js'



const header = new Header({header: headerElement});
const sectionPartners = new SectionPartners({paramsSectionPartners: paramsSectionPartners});
const sectionCourses = new SectionCourses({paramsSectionCourses: paramsSectionCourses});


header.enableHeader();
sectionCourses.enableButtonsOpenPopup();
sectionPartners.addPartners({partnersList: partnersList});



scroll();
