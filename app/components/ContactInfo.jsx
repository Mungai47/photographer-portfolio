

function ContactInfo({ info }) {
  return (
    <div className="">
      <h5 className="text-xl">Contact Info</h5>
      <p className="text-pale-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id consequat.</p>          
      <div className="">
        <table>
          <tbody>
            {info.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-2">{item.icon}</td>
                <td className="px-2 py-2">{item.text}</td>
              </tr>
            ))}
          </tbody>             
        </table>
      </div>
    </div>
  );
}

export default ContactInfo;
