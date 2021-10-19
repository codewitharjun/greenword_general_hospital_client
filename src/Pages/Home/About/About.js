import React from 'react';
import hsptl from '../../../imagess/h.jpg';
import online from '../../../imagess/1.jpg';
import nurse from '../../../imagess/2.jpg';
import baby from '../../../imagess/3.jpg';
import './About.css';

const About = () => {
    return (
        <div  className="achivement">
            <div className="arards">
                <div  className="arards-img">
                    <img src={hsptl} alt=""/>
                </div>
                <div className="arards-div">
                    <h2>History of hospitals</h2>
                    <p>
                    Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; 
                    and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching. To better serve the wide-ranging 
                    needs of the community, the modern hospital has often developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. In addition, 
                    “bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery. Patients arrive at the facility for short appointments. They may also stay for 
                    treatment in surgical or medical units for part of a day or for a full day, after which they are discharged for follow-up by a primary care health provider.
                    </p>
                </div>

                <div  className="arards-img">
                    <img src={online} alt=""/>
                </div>
                <div className="arards-div">
                    <h2>The modern hospital</h2>
                    <p>
                    Hospitals may be compared by the number of beds they contain. Modern hospitals tend to rarely exceed 800 beds, and though some integrated health facilities may have 
                    more beds, they often comprise multiple geographic locations, each with several hundred beds. In the early 21st century, it was thought that a facility of 800 
                    beds was the largest unit that could be governed satisfactorily from a single administrative unit while maintaining a corporate unity.Another index is the average 
                    bed-occupancy rate—that is, the percentage of available beds actually occupied per day or per month. Bed-occupancy rates may be higher in the cold winter months, 
                    which bring more respiratory disease. In developing countries the bed-occupancy rate is often more than 100 percent—there are more patients in the hospital than 
                    there are beds for them. This situation has also emerged in some developed countries where demand for services has outstripped supply.

                    </p>
                </div>

                <div  className="arards-img">
                    <img src={nurse} alt=""/>
                </div>
                <div className="arards-div">
                    <h2>The general hospital</h2>
                    <p>
                    General hospitals may be academic health facilities or community-based entities. They are general in the sense that they admit all types of medical and surgical 
                    cases, and they concentrate on patients with acute illnesses needing relatively short-term care. Community general hospitals vary in their bed numbers. Each 
                    general hospital, however, has an organized medical staff, a professional staff of other health providers (such as nurses, technicians, dietitians, and 
                    physiotherapists), and basic diagnostic equipment. In addition to the essential services relating to patient care, and depending on size and location, a community 
                    general hospital may also have a pharmacy, a laboratory, sophisticated diagnostic services (such as radiology and angiography), physical therapy departments, an 
                    obstetrical unit (a nursery and a delivery room), operating rooms, recovery rooms, an outpatient department, and an emergency department. Smaller hospitals may 
                    diagnose and stabilize patients prior to transfer to facilities with specialty services.
                    </p>
                </div>

                <div  className="arards-img">
                    <img src={baby} alt=""/>
                </div>
                <div className="arards-div">
                    <h2>Babys health facilities</h2>
                    <p>
                    The spread of Western medicine (or conventional medicine) and the founding of hospitals in developing countries can be attributed in large part to the influence 
                    of the medical missionary. The establishment of mission hospitals gained momentum gradually in the second half of the 19th century. By the second half of the 20th 
                    century, however, this steady growth had already dwindled, since all but a few of the hospitals and dispensaries founded during that hundred years had been absorbed 
                    into the native health care system.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;