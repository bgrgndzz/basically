import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  bold: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Poppins-Bold',
  },
  text: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontFamily: 'Poppins-Regular',
    fontSize: 17
  }
});

export default {
  'Matter': {
    'Introduction': (
      <Text style={styles.text}>
        <Text style={styles.bold}>Chemistry</Text> is the study of the properties and behavior of <Text style={styles.bold}>matter</Text>. {'\n\n'}
        <Text style={styles.bold}>Matter</Text> is a physical substance that occupies space and has mass. {'\n\n'}
        Matter is described as a combination of <Text style={styles.bold}>elements</Text> and/or <Text style={styles.bold}>molecules</Text>. {'\n\n'}
        An <Text style={styles.bold}>element</Text> is a substance that cannot be decomposed. {'\n\n'}
        The smallest amount of an element is an <Text style={styles.bold}>atom</Text>. {'\n\n'}
        A <Text style={styles.bold}>molecule</Text> is a chemical combination of two or more atoms of the same element or different elements. {'\n\n'}
        A <Text style={styles.bold}>compound</Text> is a molecule with multiple elements. {'\n\n'}
      </Text>
    ),
    'States of Matter': (
      <Text style={styles.text}>
        A sample of matter can be a <Text style={styles.bold}>gas</Text>, a <Text style={styles.bold}>liquid</Text> or a <Text style={styles.bold}>solid</Text>.{'\n\n'}
        A <Text style={styles.bold}>solid</Text> has a definite volume and shape and it can not be compressed. {'\n\n'}
        A <Text style={styles.bold}>liquid</Text> has a definite volume, but it does not have a definite shape. It also can not be compressed. {'\n\n'}
        A <Text style={styles.bold}>gas</Text> does not have a definite volume and shape, and it can be compressed. {'\n\n'}
      </Text>
    ),
    'Pure Substances': (
      <Text style={styles.text}>
        A <Text style={styles.bold}>pure substance</Text> is a matter that has a fixed composition. All these substances are either elements or compounds. {'\n\n'}
        <Text style={styles.bold}>Elements:</Text>{'\n'}
        - 118 elements are known.{'\n'}
        - cannot be decomposed into simpler substances.{'\n'}
        - composed of only one kind of atom.{'\n'}
        - have one or two letters, the first letter is capitalized{'\n'}
        - hydrogen, oxygen, neon...{'\n\n'}

        <Text style={styles.bold}>Compounds:</Text>{'\n'}
        - are elements interact with other elements {'\n'}
        - composed of two or more elements. {'\n'}
        - contain two or more kinds of atoms. {'\n'}
        - hydrogen gas + oxygen gas = compound water {'\n\n'}

        <Text style={styles.bold}>Law of Constant Composition:</Text> {'\n'}
        A chemical compound always contains its component elements in a fixed ratio. {'\n\n'}
      </Text>
    ),
    'Properties of Matter': (
      <Text style={styles.text}>
        <Text style={styles.bold}>Physical Properties:</Text>{'\n'}
        - can be observed without changing the identity and the composition of the substance {'\n'}
        - color, smell, density, melting point, boiling point, malleability, hardness... {'\n\n'}

        <Text style={styles.bold}>Chemical Properties:</Text>{'\n'}
        - may only be observed by changing the chemical identity of the substance {'\n'}
        - flammability, reacts with acid & base, burning in air {'\n\n\n'}

        <Text style={styles.bold}>Intensive Properties:</Text>{'\n'}
        - do not depend on the amount of the sample {'\n'}
        - temperature, melting point {'\n\n'}

        <Text style={styles.bold}>Extensive Properties:</Text>{'\n'}
        - depend on the amount of the sample {'\n'}
        - mass & volume {'\n\n'}
      </Text>
    )
  },
  'Mixtures': {
    'Introduction': (
      <Text style={styles.text}>
        <Text style={styles.bold}>Mixture</Text> is a combination of two or more substances in which each substance retains(doesn’t lose) its chemical identity. {'\n\n'}

        - The substances making up a mixture are called “components”. {'\n'}
        - Some mixtures don’t have the same compositions, properties and appearance. {'\n\n'}

        <Text style={styles.bold}>Homogeneous Mixtures:</Text>{'\n'}
        - uniform composition {'\n'}
        - uniform properties {'\n'}
        - air, sugar water, steel {'\n\n'}

        <Text style={styles.bold}>Heterogeneous Mixtures:</Text>{'\n'}
        - non-uniform composition {'\n'}
        - non-uniform properties {'\n'}
        - ice in soda, oil & water {'\n\n'}
      </Text>
    ),
    'Separating Mixtures': (
      <Text style={styles.text}>
        <Text style={styles.bold}>Distillation:</Text>{'\n'}
        - uses differences in boiling points {'\n'}
        - to separate mixtures consist of two or more pure liquids {'\n'}
        - the components of a liquid mixture are vaporized and then condensed and isolated {'\n\n'}

        <Text style={styles.bold}>Evaporation:</Text>{'\n'}
        - to separate liquids from solids {'\n'}
        - heating the mixture until no more liquid remains {'\n\n'}

        <Text style={styles.bold}>Filtration:</Text>{'\n'}
        - to separate big particles from smaller particles {'\n'}
        - to separate out particles which are large enough in size to be captured with a porous material {'\n\n'}
      </Text>
    )
  }
};
