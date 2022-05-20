import React from "react";
import Image from 'next/image'

export default function Mission({ item }) {
    const imgSrc = item?.links?.mission_patch_small;
    const landSuccess = item?.rocket?.first_stage?.cores[0]?.land_success;
    return (
        <div className="mission">
            {imgSrc && <Image
                src={imgSrc}
                alt={item?.mission_name}
                width={500}
                height={500}
                className="missionImage"
            />}
            <div className="missionTitle">{item?.mission_name} #{item?.flight_number}</div>
            <div className="cardDetails">Mission Ids: <span>{item?.mission_id.length > 0 ? item.mission_id : "NA"}</span></div>
            <div className="cardDetails">Launch Year:{' '}<span>{item?.launch_year}</span>
            </div>
            <div className="cardDetails"> Successful Launch:{' '}<span>{item.launch_success != null ? String(item?.launch_success) : 'NA'}</span>
            </div>
            <div className="cardDetails">Successful Landing:{' '}<span>{landSuccess != null ? String(landSuccess) : 'NA'}</span>
            </div>
        </div>
    );
}