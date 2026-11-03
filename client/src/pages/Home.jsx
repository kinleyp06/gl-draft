// Landing page: what G-Link is, guest house photos, the bed-wise rates, and links to see
// rooms, the meeting hall and the floor map without signing in.
import { Link, Navigate } from 'react-router-dom';
import { api } from '../api.js';
import { useAuth, homeFor } from '../context/AuthContext.jsx';
import { KeyTag, money, useLoad } from '../components/ui.jsx';
import { Gallery } from '../components/Photo.jsx';
import { GUEST_HOUSE_PHOTOS } from '../photos.js';

export default function Home() {
  const { user, loading } = useAuth();
  const { data } = useLoad(async () => {
    const [gh, rates] = await Promise.all([api.get('/guesthouses'), api.get('/rates')]);
    return { guesthouses: gh.guesthouses, rates: rates.rates };
  });

  if (!loading && user) return <Navigate to={homeFor(user)} replace />;

  const rate = (cat, type) => data?.rates.find((r) => r.guest_category === cat && r.charge_type === type)?.rate;

  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">College of Science and Technology</div>
          <h1>Book a bed or a room at the CST guest house</h1>
          <p className="muted">
            See which beds and meeting hall days are free, the charges and the floor map, with no account needed.
            Sign in to book: the admin reviews every request and you get the answer by email.
          </p>
          <div className="actions">
            <Link className="btn" to="/rooms">See rooms and free beds</Link>
            <Link className="btn secondary" to="/hall">Meeting hall</Link>
            <Link className="btn secondary" to="/floor-map">Floor map</Link>
          </div>
          <p className="small" style={{ marginTop: '0.9rem' }}>
            Want to book? <Link to="/register" className="highlight">Create an account</Link> or <Link to="/login">sign in</Link>.
          </p>
        </div>
        <div className="hero-tags" aria-hidden="true">
          <KeyTag number="101" />
          <KeyTag number="102" />
          <KeyTag number="103" />
        </div>
      </section>

      <section className="band">
        <h2 style={{ marginTop: 0 }}>The guest house</h2>
        <Gallery photos={GUEST_HOUSE_PHOTOS} />
      </section>

      <h2>Room charges per night</h2>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Guest</th><th>One bed</th><th>Whole room (exclusive)</th></tr></thead>
          <tbody>
            {['RUB', 'Non-RUB'].map((c) => (
              <tr key={c}><td>{c === 'RUB' ? 'RUB member' : 'Non-RUB'}</td><td>{money(rate(c, 'Per Bed'))}</td><td>{money(rate(c, 'Exclusive Room'))}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted small" style={{ marginTop: '0.5rem' }}>
        RUB = Royal University of Bhutan staff; everyone else pays the Non-RUB rate. 5% GST is added to every bill. Rooms have 3 beds. The meeting hall (25 seats) inside the guest house is Nu. 5,000 per day plus GST.
      </p>

      <h2>Guest houses</h2>
      <div className="grid">
        {(data?.guesthouses || []).map((g) => (
          <div className="panel" key={g.guesthouse_id}>
            <h3>{g.guesthouse_name}</h3>
            <p className="muted small">{g.location}</p>
            <p>{g.description}</p>
            <p className="small">{g.room_count} rooms, {g.bed_count} beds</p>
            <div className="actions"><Link className="btn small" to="/rooms">See free beds</Link><Link className="btn small secondary" to="/floor-map">Floor map</Link></div>
          </div>
        ))}
      </div>
    </>
  );
}
