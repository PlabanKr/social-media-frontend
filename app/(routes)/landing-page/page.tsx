import "@/app/_styles/landingpage.css"

export default function LandingPage() {
    return (
      <div className="landing-page-body">
          <h1>Social Media</h1>
          <p>This is a hobby project created by Plaban Kumar Mondal.</p>
          <div>
            <button className="filled-button horizontal-margin">Login</button>
            <button className="outlined-button horizontal-margin">Create Account</button>
          </div>
      </div>
    )
  }