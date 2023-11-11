import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import MustningPage from '../pages/MustningPage'
import OmMustetPage from '../pages/OmMustetPage'
import KontaktPage from '../pages/KontaktPage'

export default class MenuNavbar extends Component {
  state = { activeItem: 'mustning' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMenuItemComponent = () => {
    const { activeItem } = this.state;

    switch (activeItem) {
      case 'mustning':
        return <MustningPage />;
      case 'musteriet':
        return  <OmMustetPage />;
      case 'kontakt':
        return <KontaktPage />;
      default:
        return null;
    }
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div  style={{ display: 'flex' }}>
        <Menu text vertical style={{ flex: '1' }}>
          <Menu.Item header>Lidingö Musteri</Menu.Item>
          <Menu.Item
            name='mustning'
            active={activeItem === 'mustning'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='musteriet'
            active={activeItem === 'musteriet'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='kontakt'
            active={activeItem === 'kontakt'}
            onClick={this.handleItemClick}
          />
        </Menu>

        {/* Render the selected component */}
        <div style={{ flex: '3' }}>
          {this.renderMenuItemComponent()}
        </div>
      </div>
    );
  }
}
