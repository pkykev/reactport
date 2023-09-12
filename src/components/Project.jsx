import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// later this can be reduced to one card and interated over
// center these cards and keep them 30% and make them 2x3 in stead of 1x6 later
function Portfolio() {







  return (<>
    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src="src/assets/readmegen.png" />
      <Card.Body>
        <Card.Title>ReadMe Generator</Card.Title>
        <Card.Text>
          This ReadMe generator is a CLI prompt dsigned to help create ReadMe' for github repos and help any developer work on the programming parts of their projects faster.
        </Card.Text>
        <Button variant="primary" href='https://github.com/pkykev/readmegen'>Github Repo</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src="src/assets/bitmoji.png" />
      <Card.Body>
        <Card.Title>Coding With Friends</Card.Title>
        <Card.Text>
          Coding with friends is a social media site designed for coders to engage with on a more personal level with friends by scaling down the ocean sized amount of knowledge out there to a more digestible size. Coding with friends is designed to make it easier to learn with your friends!
        </Card.Text>
        <Button variant="primary" href='https://github.com/a-down/group-project-03'>Github Repo</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src="src/assets/weatherappss.png" />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
          This weatherapp is a convenient way to check the weather in any area!
        </Card.Text>
        <Button variant="primary" href='https://github.com/pkykev/weatherapp'>Github Repo</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src="src/assets/shipmate.png" />
      <Card.Body>
        <Card.Title>Ship Mate</Card.Title>
        <Card.Text>
          Ship Mate is a unique and exciting dating and meeting platform designed for travelers who share a passion for cruise ship adventures. Whether you're a solo traveler seeking companionship or someone looking to find romance amidst the waves, Ship Mate offers a seamless way to connect with like-minded individuals who will be sharing the same cruise ship journey.
        </Card.Text>
        <Button variant="primary" href='https://github.com/pkykev/grp_project2'>Github Repo</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src="src/assets/sudoku.png" />
      <Card.Body>
        <Card.Title>Sudoku Game</Card.Title>
        <Card.Text>
          This was my first group project and first collab, we created a sudoku game with an API and local storeage for highscores.
        </Card.Text>
        <Button variant="primary" href='https://github.com/Ad31aid/fantastic-octo-sudoku'>Github Repo</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src="src/assets/logo.svg" />
      <Card.Body>
        <Card.Title>SVG Logo Maker</Card.Title>
        <Card.Text>
          This logomaker is designed to help new businesses create logos.
        </Card.Text>
        <Button variant="primary" href='https://github.com/pkykev/logogen'>Github Repo</Button>
      </Card.Body>
    </Card>

  </>);
}

export default Portfolio;