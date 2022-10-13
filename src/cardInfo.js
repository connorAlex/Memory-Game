import homer from './images/homer.webp';
import bart from './images/Bart_Simpson.webp';
import barney from './images/Barney_Gumble.webp'
import krusty from './images/Krusty_The_Clown.webp';
import lisa from './images/Lisa_Simpson.webp';
import maggie from './images/Maggie_Simpson.webp';
import marge from './images/Marge_Simpson.webp';
import martin from './images/Martin_PrinceJr.webp';
import moe from './images/Moe_Syzlak.webp';
import skinner from './images/PrincipalSeymourSkinner.webp';
import ralph from './images/RalphWiggum.webp';

const cardArray = [
    {
        src: homer,
        label: 'Homer Simpson',
    },
    {
        src: barney,
        label: 'Barney Gumble'
    },
    {
        src: krusty,
        label: 'Krusty The Clown'
    },
    {
        src: lisa,
        label: 'Lisa Simpson'
    },
    {
        src: maggie,
        label: 'Maggie Simpson'
    },
    {
        src: marge,
        label: 'Marge Simpson'
    },
    {
        src: martin,
        label: 'Martin Prince Jr.'
    },
    {
        src: moe,
        label: 'Moe Syzlak'
    },
    {
        src: skinner,
        label: 'Principal Seymour Skinner'
    },
    {
        src: ralph,
        label: 'Ralph Wiggum'
    },
    {
        src: bart,
        label: "Bart Simpson"
    }

]

for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].id = i;
}

export {cardArray};