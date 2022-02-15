-- THIS SOURCE-CODE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
-- IMPLIED. IN NO  EVENT WILL THE AUTHOR BE HELD LIABLE FOR ANY DAMAGES ARISING FROM
-- THE USE OF THIS SOURCE-CODE. USE AT YOUR OWN RISK.


library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all;
use ieee.math_real.all;

  ENTiTY test_entity is
        -- 0 sdfg dsfg sdfg dsfg 
  genEric    -- 1gfg fg fg fg 
  -- 12sd fg dsf gsdfg fdsg fgs
     (-- 2 sdfg dfg
    -- 3 sfdg sdfg sdf
    gSTEP0     :   std_ulogic_vector(2 downto -11):= b"001";
    gSTEP1    :   std_ulogic_vector(2 downto -1);
    twos_complement : boolean := true;-- 4  fs f f fg sfg fgs dfg
    -- 5 fg sfd gsfg sf df g
    data_width      : natural := 16   ;
    step_width      : natural := 3;
    lut_len         : natural := 255;--6
    phase_offset:natural:=0;--7
    blubber:std_ulogic_vector ( 2 downto 0 ) := (others => '1')--77
    --8
    )   --9
    -- 10
    ; -- 11
-- 12
  pOrt --13
--14
     (--15
--16
    clock    : in  std_ulogic;
    reset    : in  std_ulogic;
    step     : in  std_ulogic_vector(2 downto 0);
    enable   : in  std_ulogic;--17
    data_out : out std_ulogic_vector(data_width-1 downto 0)--18
    -- 19
        ) -- 20
-- 21
    ;-- 22
end test_entity;






architecture Behavioral of test_entity is

  constant SINE_LUT : sine_lut_t := gen_sine_lut;

  signal data : std_ulogic_vector(data_out'range);
  signal part : std_ulogic_vector(1 downto 0);

begin


  proc_name: process(clock, reset)
  begin
    if reset = RESET_ACTIVE then
      data <= (others => '0');
    elsif rising_edge(clock) then
      data <= (others => '1');
      
    end if;
  end process proc_name;
  
end Behavioral;
