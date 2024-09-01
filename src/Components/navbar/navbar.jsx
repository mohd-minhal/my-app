import "./navbar.css";

export default function NavBar() {
  const nav = [
    {
      name: "John Doe",
    },
    {
      name: "India"
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/login"
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/"
    },
    {
      name: "Contact",
      link: "Contact"
    }
  ]

  const navhtml = nav.slice(0, 2).map((value, index) => {
    let str = `nav-${index}`;
    return <li className={str} > {value.name.toUpperCase()}</li>
  })

  navhtml.push(
    <ul className="nav-2">{
      nav.slice(2).map((value, index) => {
        let str = `nav-2${index}`;
        return <li className={str} > <a className="social-links" href={value.link}>{value.name.toUpperCase()}</a></li>
      })
    }
    </ul>
  )

  return (
    <div >
      <ul className="nav-container">{navhtml}</ul>
    </div>
  );
}
