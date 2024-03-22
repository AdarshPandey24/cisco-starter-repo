import React, { useState } from 'react'
import { useEffect } from 'react'

const IpAdress = ({ ipType }) => {
    const [ipAddress, setIpAdress] = useState("");
    const ipArray = { ipv4: "https://api.ipify.org?format=json", ipv6: "https://api64.ipify.org?format=json" }
    useEffect(() => {
        fetch(
            ipArray[ipType])
            .then((res) => res.json())
            .then((json) => {
                setIpAdress(json.ip); 
            })
    }, []);

    return (
        <div>Your public {ipType} IP Address: {ipAddress}</div>
    )
}

export default IpAdress