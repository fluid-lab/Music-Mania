import React from 'react';
import Music from '../logic/Logic.js'
import Sound1 from '../audio/row3/ride.wav'
import Sound2 from '../audio/row3/clap.wav'
import Sound3 from '../audio/row3/hihat.wav'
import Sound4 from '../audio/row3/openhat.wav'
import Sound5 from '../audio/row3/boom.wav'
import Sound6 from '../audio/row3/snare.wav'
import Sound7 from '../audio/row3/tink.wav'
import Sound8 from '../audio/row3/tom.wav'
import Sound9 from '../audio/row3/kick.wav'




export default class Row3 extends React.Component{
	
	render(){
	return(
           <div>
         <Music name="65" source={Sound1} />
         <Music name="83" source={Sound2} />
          <Music name="68" source={Sound3} />
           <Music name="70" source={Sound4} />
         <Music name="71" source={Sound5} />
         <Music name="72" source={Sound6} />
         <Music name="74" source={Sound7} />
       <Music name="75" source={Sound8} />
        <Music name="76" source={Sound9} />
       


           </div>
         


		)
}






}