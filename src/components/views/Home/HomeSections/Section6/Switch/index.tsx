import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch } from "@mui/base/SwitchUnstyled";

const blue = {
  500: "#37B2CF",
};

const grey = {
  400: "#5e82be",
  500: "#5e82be",
  600: "#5e82be",
};

const BasicSwitchRoot = styled("span")(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
  margin: 10px 1.5rem;
  background: #fff;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 4px 5px 50px rgba(40, 226, 170, 0.35);

  &.Switch-disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.Switch-checked {
    background: #fff;
  }
  `
);

const BasicSwitchInput = styled("input")`
  cursor: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  box-shadow: 0px 53px 66px rgba(40, 226, 170, 0.2);
`;

const BasicSwitchThumb = styled("span")`
  display: block;
  width: 30px;
  height: 30px;
  top: 5px;
  left: 7px;
  border-radius: 16px;
  background-color: #28E2AA;
  position: relative;
  transition: all 200ms ease;

  &.Switch-focusVisible {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.Switch-checked {
    left: calc(100% - 40px);
    top: 5px;
    background-color: #28E2AA;
  }
`;

export function BasicSwitch(props: any) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    "Switch-checked": checked,
    "Switch-disabled": disabled,
    "Switch-focusVisible": focusVisible,
  };

  return (
    <BasicSwitchRoot className={clsx(stateClasses)}>
      <BasicSwitchThumb className={clsx(stateClasses)} />
      <BasicSwitchInput {...getInputProps()} />
    </BasicSwitchRoot>
  );
}