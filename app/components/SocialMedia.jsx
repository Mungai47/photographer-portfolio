

function SocialMedia({ media }) {
  return (
    <div>
      <table>
        <tbody className="flex flex-wrap gap-4">
          {media.map((item, index) => (
            <tr key={index}>
              <td>{item.icon}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SocialMedia;
