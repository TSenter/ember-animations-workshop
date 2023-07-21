import Component from '@glimmer/component';
import { service } from '@ember/service';
import move from 'ember-animated/motions/move';
import scale from 'ember-animated/motions/scale';

import './album-card.css';

export default class AlbumCardComponent extends Component {
  @service player;

  *transition({ keptSprites, receivedSprites }) {
    for (const sprite of [...receivedSprites, ...keptSprites]) {
      move(sprite);
      scale(sprite);
    }
    yield;
  }
}
