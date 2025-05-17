function CalculateRank(n) {
   if (n > 5000) {
      return 'https://cdn.r6stats.com/seasons/ranks/champions.svg';
   } else if (n > 4100) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank20.da30b73c.svg';
   } else if (n > 3800) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank17.27fbc796.svg';
   } else if (n > 3500) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank18.0942a2f2.svg';
   } else if (n > 3200) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank19.5cc86715.svg';
   } else if (n > 3000) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank13.42fb03b4.svg';
   } else if (n > 2800) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank14.1e94c7f0.svg';
   } else if (n > 2600) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank15.e8ddab14.svg';
   } else if (n > 2500) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank9.4196c329.svg';
   } else if (n > 2400) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank10.cce1c8c4.svg';
   } else if (n > 2300) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank11.2fffcd0a.svg';
   } else if (n > 2100) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank12.c432740e.svg';
   } else if (n > 2000) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank5.5b0b90e9.svg';
   } else if (n > 1900) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank6.fc40a107.svg';
   } else if (n > 1800) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank7.ba63ea85.svg';
   } else if (n > 1600) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank8.d08a99eb.svg';
   } else if (n > 1500) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank1.79a2af3a.svg';
   } else if (n > 1400) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank2.f2bc8224.svg';
   } else if (n > 1300) {
      console.log('DONE');
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank3.f204dd6e.svg';
   } else if (n > 1100) {
      return 'https://ubistatic-a.akamaihd.net/0058/prod/assets/styles/images/hd-rank4.5105339d.svg';
   } else {
      return 'https://preview.redd.it/gfq41hb18zl11.png?width=1342&format=png&auto=webp&s=4ef96afbd14a8a9c0eced26d878337f8b071be29';
   }
}

export default CalculateRank;
