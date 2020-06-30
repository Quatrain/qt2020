import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link, HashLink } from 'gatsby'

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

import detectLanguage from '../../lib/detectLanguage.js'

//Languages Pack Importation
import JSONData from '../../content/languages.json'

//Call the function which will allow us to detect the user's navigator language
const language = { ...detectLanguage.detectLanguage(JSONData), ...JSONData.__ }



// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content = {language.company_name}
      inverted
      style={{
        fontFamily: 'Planer-Bold',
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginTop: mobile ? '1.5em' : '1em',
      }}
    />
    <Header
      as='h2'
      content={language.company_slogan}
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          id='home'
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 0em', backgroundImage: "url('https://envato-sites-images.imgix.net/e6068eaf-7101-4959-bb8b-e0ed8b4d19f1?auto=format&fit=max&w=2560&q=60')", backgroundSize: 'cover'}}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              style={{border: 'none'}}
            >
              <Container >
              <Link to="#home">
                <Menu.Item as='a' active >
                {language.ui_navbar_home}
                </Menu.Item>
              </Link>
              <Link to="#introduction">
                <Menu.Item as='a'>{language.ui_navbar_intro}</Menu.Item>
              </Link>
              <Link to="#quote">
                <Menu.Item as='a'>{language.ui_navbar_quote}</Menu.Item>
              </Link>
                <Link to="#expertises">
                  <Menu.Item as='a'>{language.ui_navbar_expertises}</Menu.Item>
                </Link>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >

          {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical id='introduction'>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          {language.descr_section_title}
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        {language.descr_section_content}
        </p>
      </Container>
    </Segment>

    <Segment style={{ padding: '0em', backgroundColor: "rgb(153, 204, 0)", backgroundSize: 'cover'}} vertical id='quote'>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              {language.quote_content}
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://pbs.twimg.com/profile_images/1031805990214221824/M0iudRQI_400x400.jpg' />
              <b>{language.quote_author}</b> {language.quote_author_title}
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical id='expertises'>
      <Container>
      <Header as='h2' style={{ fontSize: '3em', textAlign: 'center'}}>
          {language.prom_section_title}
        </Header>

        <Grid columns={2} style={{width: '828px', marginLeft: 'auto', marginRight: 'auto'}}>
        <Grid.Row>
            <Grid.Column>
              <Image src='https://images.unsplash.com/photo-1484544808355-8ec84e534d75?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE5MjE4fQ&rect=1160%2C0%2C4368%2C4368&auto=format&w=414' />
              <h2>{language.prom_subsection1_title}</h2>
              <h3 style={{ fontSize: '1.33em' }}>{language.prom_subsection1_subtitle}</h3>
              <p style={{ fontSize: '1.33em' }}>{language.prom_subsection1_content}</p>
            </Grid.Column>
            <Grid.Column>
              <Image src='https://images.unsplash.com/photo-1549563316-5384a923453e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE5MjE4fQ&rect=0%2C864%2C3456%2C3456&auto=format&w=414' />
              <h2>{language.prom_subsection2_title}</h2>
              <h3 style={{ fontSize: '1.33em' }}>{language.prom_subsection2_subtitle}</h3>
              <p style={{ fontSize: '1.33em' }}>{language.prom_subsection2_content}</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Image src='https://images.unsplash.com/photo-1551650992-ee4fd47df41f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE5MjE4fQ&rect=0%2C0%2C3632%2C3632&auto=format&w=414' />
              <h2>{language.prom_subsection3_title}</h2>
              <h3 style={{ fontSize: '1.33em' }}>{language.prom_subsection3_subtitle}</h3>
              <p style={{ fontSize: '1.33em' }}>{language.prom_subsection3_content}</p>
            </Grid.Column>
            <Grid.Column>
              <Image src='https://images.unsplash.com/photo-1528413538163-0e0d91129480?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE5MjE4fQ&rect=504%2C0%2C3024%2C3024&auto=format&w=414' />
              <h2>{language.prom_subsection4_title}</h2>
              <h3 style={{ fontSize: '1.33em' }}>{language.prom_subsection4_subtitle}</h3>
              <p style={{ fontSize: '1.33em' }}>{language.prom_subsection4_content}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Quatrain Technologies
              </Header>
              <p>
                20 Avenue des Erables, 84000 Avignon, France
              </p>
              <p>
                <a href="mailto:contact@quatrain.com" style={{color: '(255,255,255,.9)', textDecoration: 'underline'}}>
                  contact@quatrain.com
                  </a>
                </p>
              <p>
                +33 (0)4 90 80 40 40
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <a href="https://twitter.com/crapougnax" target="_blank">
              <Button color='twitter'>
                <Icon name='twitter' /> Twitter
              </Button>
            </a>
            <a href = "https://www.linkedin.com/company/quatrain-technologies/" target="_blank">
              <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
            </a>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
