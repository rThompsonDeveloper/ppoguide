import { useState, useRef } from "react";
import styled from "styled-components";

const Rates = () => {
  const [update, setUpdate] = useState(true);

  const GM_SHINY = 1.2;
  const GM = 1.5;
  const HUNTER_CHARM = 1.2;
  const HONEY = 1.25;
  const RARE_CHARM = 1.1;
  const ALTERING_CAVE = 1.3;
  const SWARM = 1.25;
  const X2 = 2;
  const SHINY_CHARM = 1.25;
  const DARK_OR_LAVA = 2;
  const ALL_OTHER_ROCKS = 1.25;
  const erRate = 5000;
  const legendaryRate = 125000;
  const eventLegendaryRate = 100000;
  const vrRate = 600;
  const rareRate = 60;
  const eliteRate = 200;
  const shinyRate = 8192;
  const gmRef = useRef(null);
  const honeyRef = useRef(null);
  const hunterCharmRef = useRef(null);
  const rareCharmRef = useRef(null);
  const alteringCaveRef = useRef(null);
  const x2Ref = useRef(null);
  const shinyCharmRef = useRef(null);
  const swarmRef = useRef(null);
  const darkOrLavaRef = useRef(null);
  const allOtherRocksRef = useRef(null);

  const setRate = (baseRate, isLegend = false) => {
    if (gmRef.current) {
      if (
        darkOrLavaRef.current.checked === false &&
        allOtherRocksRef.current.checked === false
      ) {
        if (gmRef.current.checked) baseRate = baseRate / GM;
        if (honeyRef.current.checked) baseRate = baseRate / HONEY;
        if (hunterCharmRef.current.checked) baseRate = baseRate / HUNTER_CHARM;
        if (rareCharmRef.current.checked) baseRate = baseRate / RARE_CHARM;
        if (isLegend && x2Ref.current.checked) baseRate = baseRate / X2;
        if (swarmRef.current.checked) baseRate = baseRate / SWARM;
        if (alteringCaveRef.current.checked)
          baseRate = baseRate / ALTERING_CAVE;
      }
      if (darkOrLavaRef.current.checked) baseRate = baseRate / DARK_OR_LAVA;
      if (allOtherRocksRef.current.checked)
        baseRate = baseRate / ALL_OTHER_ROCKS;
    }

    return Math.trunc(baseRate);
  };

  const setShinyRate = (baseRate) => {
    if (gmRef.current) {
      if (gmRef.current.checked) baseRate = baseRate / GM_SHINY;
      if (shinyCharmRef.current.checked) baseRate = baseRate / SHINY_CHARM;
    }

    return Math.trunc(baseRate);
  };

  return (
    <Wrapper>
      <RateWrapper>
        <Text>Legendary: 1/{setRate(legendaryRate, true)}</Text>
        <Text>Event Legendary: 1/{setRate(eventLegendaryRate, true)}</Text>
        <Text>Extremely Rare: 1/{setRate(erRate)}</Text>
        <Text>Very Rare: 1/{setRate(vrRate)}</Text>
        <Text>Rare: 1/{setRate(rareRate)}</Text>
        <Text>Shiny: 1/{setShinyRate(shinyRate)}</Text>
        <Text>Elite: 1/{eliteRate}</Text>
      </RateWrapper>
      <ControlWrapper>
        <Row>
          <Input
            type="checkbox"
            value="Gold Membership"
            id="gold_membership"
            ref={gmRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="gold_membership">Gold Membership</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="Honey"
            id="honey"
            ref={honeyRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="honey">Honey</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="Hunter Charm"
            id="hunter_charm"
            ref={hunterCharmRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="hunter_charm">Hunter Charm</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="Rare Charm"
            id="rare_charm"
            ref={rareCharmRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="rare_charm">Rare Charm</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="Shiny Charm"
            id="shiny_charm"
            ref={shinyCharmRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="shiny_charm">Shiny Charm</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="Altering Cave"
            id="altering_cave"
            ref={alteringCaveRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="altering_cave">Altering Cave</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="Swarm"
            id="swarm"
            ref={swarmRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="altering_cave">Swarm</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="X2"
            id="x2"
            ref={x2Ref}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="x2">X2</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="darkOrLava"
            id="dark_or_lava"
            ref={darkOrLavaRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="dark_or_lava">Dark Or Lava</Label>
        </Row>
        <Row>
          <Input
            type="checkbox"
            value="allOtherRocks"
            id="all_other_rocks"
            ref={allOtherRocksRef}
            onChange={() => setUpdate(!update)}
          />
          <Label htmlFor="all_other_rocks">All Other Rocks</Label>
        </Row>
      </ControlWrapper>
    </Wrapper>
  );
};

const Input = styled.input`
  font-size: 1em;
  cursor: pointer;
`;

const Wrapper = styled.div`
  padding: 10px;
  border: 1px solid white;
  display: flex;
  max-width: 400px;
`;

const Row = styled.div`
  display: flex;
`;

const Text = styled.p`
  color: white;
  font-size: 1em;
  margin-bottom: 2px;
`;

const RateWrapper = styled.div`
  flex: 1;
`;

const Label = styled.label`
  color: white;
`;

const ControlWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export default Rates;
