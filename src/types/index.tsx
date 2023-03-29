/* eslint-disable @typescript-eslint/no-empty-interface */
export interface Contract {
  contractName: string;
  abi: Abi[];
  metadata: string;
  bytecode: string;
  deployedBytecode: string;
  immutableReferences: ImmutableReferences;
  generatedSources: string[];
  deployedGeneratedSources: DeployedGeneratedSource[];
  sourceMap: string;
  deployedSourceMap: string;
  source: string;
  sourcePath: string;
  ast: Ast2;
  compiler: Compiler;
  networks: Networks;
  schemaVersion: string;
  updatedAt: string;
  networkType: string;
  devdoc: Devdoc;
  userdoc: Userdoc;
}

export interface Abi {
  inputs?: Input[];
  name?: string;
  outputs?: Output[];
  stateMutability: string;
  type: string;
  constant?: boolean;
  payable?: boolean;
}

export interface Input {
  internalType: string;
  name: string;
  type: string;
}

export interface Output {
  internalType: string;
  name: string;
  type: string;
}

export interface ImmutableReferences {}

export interface DeployedGeneratedSource {
  ast: Ast;
  contents: string;
  id: number;
  language: string;
  name: string;
}

export interface Ast {
  nodeType: string;
  src: string;
  statements: Statement[];
}

export interface Statement {
  body: Body;
  name: string;
  nodeType: string;
  returnVariables?: ReturnVariable[];
  src: string;
  parameters?: Parameter[];
}

export interface Body {
  nodeType: string;
  src: string;
  statements: Statement2[];
}

export interface Statement2 {
  nodeType: string;
  src: string;
  value?: Value;
  variableNames?: VariableName[];
  expression?: Expression;
  body?: Body2;
  condition?: Condition;
  statements?: Statement4[];
  variables?: Variable3[];
  post?: Post;
  pre?: Pre;
}

export interface Value {
  arguments?: Argument[];
  functionName?: FunctionName;
  nodeType: string;
  src: string;
  name?: string;
}

export interface Argument {
  name?: string;
  nodeType: string;
  src: string;
  kind?: string;
  type?: string;
  value?: string;
}

export interface FunctionName {
  name: string;
  nodeType: string;
  src: string;
}

export interface VariableName {
  name: string;
  nodeType: string;
  src: string;
}

export interface Expression {
  arguments: Argument2[];
  functionName: FunctionName3;
  nodeType: string;
  src: string;
}

export interface Argument2 {
  name?: string;
  nodeType: string;
  src: string;
  kind?: string;
  type?: string;
  value?: string;
  arguments?: Argument3[];
  functionName?: FunctionName2;
  hexValue?: string;
}

export interface Argument3 {
  name?: string;
  nodeType: string;
  src: string;
  kind?: string;
  type?: string;
  value?: string;
}

export interface FunctionName2 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName3 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Body2 {
  nodeType: string;
  src: string;
  statements: Statement3[];
}

export interface Statement3 {
  expression?: Expression2;
  nodeType: string;
  src: string;
  value?: Value2;
  variables?: Variable[];
  variableNames?: VariableName2[];
}

export interface Expression2 {
  arguments: Argument4[];
  functionName: FunctionName4;
  nodeType: string;
  src: string;
}

export interface Argument4 {
  kind: string;
  nodeType: string;
  src: string;
  type: string;
  value: string;
}

export interface FunctionName4 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Value2 {
  arguments: Argument5[];
  functionName: FunctionName5;
  nodeType: string;
  src: string;
}

export interface Argument5 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName5 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Variable {
  name: string;
  nodeType: string;
  src: string;
  type: string;
}

export interface VariableName2 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Condition {
  arguments: Argument6[];
  functionName: FunctionName8;
  nodeType: string;
  src: string;
}

export interface Argument6 {
  arguments?: Argument7[];
  functionName?: FunctionName7;
  nodeType: string;
  src: string;
  kind?: string;
  type?: string;
  value?: string;
  name?: string;
}

export interface Argument7 {
  name?: string;
  nodeType: string;
  src: string;
  arguments?: Argument8[];
  functionName?: FunctionName6;
}

export interface Argument8 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName6 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName7 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName8 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Statement4 {
  nodeType: string;
  src: string;
  value: Value3;
  variables?: Variable2[];
  variableNames?: VariableName3[];
}

export interface Value3 {
  kind?: string;
  nodeType: string;
  src: string;
  type?: string;
  value?: string;
  arguments?: Argument9[];
  functionName?: FunctionName10;
}

export interface Argument9 {
  arguments?: Argument10[];
  functionName?: FunctionName9;
  nodeType: string;
  src: string;
  name?: string;
}

export interface Argument10 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName9 {
  name: string;
  nodeType: string;
  src: string;
}

export interface FunctionName10 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Variable2 {
  name: string;
  nodeType: string;
  src: string;
  type: string;
}

export interface VariableName3 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Variable3 {
  name: string;
  nodeType: string;
  src: string;
  type: string;
}

export interface Post {
  nodeType: string;
  src: string;
  statements: Statement5[];
}

export interface Statement5 {
  nodeType: string;
  src: string;
  value: Value4;
  variableNames: VariableName4[];
}

export interface Value4 {
  arguments: Argument11[];
  functionName: FunctionName11;
  nodeType: string;
  src: string;
}

export interface Argument11 {
  name?: string;
  nodeType: string;
  src: string;
  kind?: string;
  type?: string;
  value?: string;
}

export interface FunctionName11 {
  name: string;
  nodeType: string;
  src: string;
}

export interface VariableName4 {
  name: string;
  nodeType: string;
  src: string;
}

export interface Pre {
  nodeType: string;
  src: string;
  statements: Statement6[];
}

export interface Statement6 {
  nodeType: string;
  src: string;
  value: Value5;
  variables: Variable4[];
}

export interface Value5 {
  kind: string;
  nodeType: string;
  src: string;
  type: string;
  value: string;
}

export interface Variable4 {
  name: string;
  nodeType: string;
  src: string;
  type: string;
}

export interface ReturnVariable {
  name: string;
  nodeType: string;
  src: string;
  type: string;
}

export interface Parameter {
  name: string;
  nodeType: string;
  src: string;
  type: string;
}

export interface Ast2 {
  absolutePath: string;
  exportedSymbols: ExportedSymbols;
  id: number;
  license: string;
  nodeType: string;
  nodes: Node[];
  src: string;
}

export interface ExportedSymbols {
  Faucet: number[];
  IFaucet: number[];
  Logger: number[];
  Owned: number[];
}

export interface Node {
  id: number;
  literals?: string[];
  nodeType: string;
  src: string;
  absolutePath?: string;
  file?: string;
  nameLocation?: string;
  scope?: number;
  sourceUnit?: number;
  symbolAliases?: string[];
  unitAlias?: string;
  abstract?: boolean;
  baseContracts?: BaseContract[];
  canonicalName?: string;
  contractDependencies?: string[];
  contractKind?: string;
  fullyImplemented?: boolean;
  linearizedBaseContracts?: number[];
  name?: string;
  nodes?: Node2[];
  usedErrors?: string[];
}

export interface BaseContract {
  baseName: BaseName;
  id: number;
  nodeType: string;
  src: string;
}

export interface BaseName {
  id: number;
  name: string;
  nameLocations: string[];
  nodeType: string;
  referencedDeclaration: number;
  src: string;
}

export interface Node2 {
  constant?: boolean;
  functionSelector?: string;
  id: number;
  mutability?: string;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope?: number;
  src: string;
  stateVariable?: boolean;
  storageLocation?: string;
  typeDescriptions?: TypeDescriptions;
  typeName?: TypeName;
  visibility: string;
  body?: Body3;
  parameters?: Parameters;
  virtual?: boolean;
  implemented?: boolean;
  kind?: string;
  modifiers?: Modifier[];
  returnParameters?: ReturnParameters;
  stateMutability?: string;
  baseFunctions?: number[];
  overrides?: Overrides;
}

export interface TypeDescriptions {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName {
  id: number;
  name?: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions2;
  keyName?: string;
  keyNameLocation?: string;
  keyType?: KeyType;
  valueName?: string;
  valueNameLocation?: string;
  valueType?: ValueType;
}

export interface TypeDescriptions2 {
  typeIdentifier: string;
  typeString: string;
}

export interface KeyType {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions3;
}

export interface TypeDescriptions3 {
  typeIdentifier: string;
  typeString: string;
}

export interface ValueType {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  stateMutability?: string;
  typeDescriptions: TypeDescriptions4;
}

export interface TypeDescriptions4 {
  typeIdentifier: string;
  typeString: string;
}

export interface Body3 {
  id: number;
  nodeType: string;
  src: string;
  statements: Statement7[];
}

export interface Statement7 {
  expression?: Expression3;
  functionReturnParameters?: number;
  id: number;
  nodeType: string;
  src: string;
  assignments?: number[];
  declarations?: Declaration[];
  initialValue?: InitialValue;
  condition?: Condition2;
  trueBody?: TrueBody;
  body?: Body4;
  initializationExpression?: InitializationExpression;
  loopExpression?: LoopExpression;
}

export interface Expression3 {
  baseExpression?: BaseExpression;
  id: number;
  indexExpression?: IndexExpression;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  lValueRequested?: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions7;
  name?: string;
  overloadedDeclarations?: string[];
  referencedDeclaration?: number;
  arguments?: Argument12[];
  expression?: Expression4;
  kind?: string;
  nameLocations?: string[];
  names?: string[];
  tryCall?: boolean;
  hexValue?: string;
  value?: string;
}

export interface BaseExpression {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions5;
}

export interface TypeDescriptions5 {
  typeIdentifier: string;
  typeString: string;
}

export interface IndexExpression {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions6;
}

export interface TypeDescriptions6 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions7 {
  typeIdentifier: string;
  typeString: string;
}

export interface Argument12 {
  id: number;
  name?: string;
  nodeType: string;
  overloadedDeclarations?: string[];
  referencedDeclaration?: number;
  src: string;
  typeDescriptions: TypeDescriptions8;
  commonType?: CommonType;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  lValueRequested?: boolean;
  leftExpression?: LeftExpression;
  operator?: string;
  rightExpression?: RightExpression;
  hexValue?: string;
  kind?: string;
  value?: string;
}

export interface TypeDescriptions8 {
  typeIdentifier: string;
  typeString: string;
}

export interface CommonType {
  typeIdentifier: string;
  typeString: string;
}

export interface LeftExpression {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions9;
}

export interface TypeDescriptions9 {
  typeIdentifier: string;
  typeString: string;
}

export interface RightExpression {
  hexValue: string;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  kind: string;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions10;
  value: string;
}

export interface TypeDescriptions10 {
  typeIdentifier: string;
  typeString: string;
}

export interface Expression4 {
  argumentTypes: ArgumentType[];
  expression?: Expression5;
  id: number;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  lValueRequested?: boolean;
  memberLocation?: string;
  memberName?: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions16;
  name?: string;
  overloadedDeclarations?: number[];
  referencedDeclaration?: number;
}

export interface ArgumentType {
  typeIdentifier: string;
  typeString: string;
}

export interface Expression5 {
  arguments: Argument13[];
  expression: Expression7;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  kind: string;
  lValueRequested: boolean;
  nameLocations: string[];
  names: string[];
  nodeType: string;
  src: string;
  tryCall: boolean;
  typeDescriptions: TypeDescriptions15;
}

export interface Argument13 {
  expression: Expression6;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  memberLocation: string;
  memberName: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions12;
}

export interface Expression6 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions11;
}

export interface TypeDescriptions11 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions12 {
  typeIdentifier: string;
  typeString: string;
}

export interface Expression7 {
  argumentTypes: ArgumentType2[];
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions13;
  typeName: TypeName2;
}

export interface ArgumentType2 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions13 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName2 {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  stateMutability: string;
  typeDescriptions: TypeDescriptions14;
}

export interface TypeDescriptions14 {}

export interface TypeDescriptions15 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions16 {
  typeIdentifier: string;
  typeString: string;
}

export interface Declaration {
  constant: boolean;
  id: number;
  mutability: string;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: string;
  typeDescriptions: TypeDescriptions17;
  typeName: TypeName3;
  visibility: string;
}

export interface TypeDescriptions17 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName3 {
  baseType?: BaseType;
  id: number;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions19;
  name?: string;
  stateMutability?: string;
}

export interface BaseType {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions18;
}

export interface TypeDescriptions18 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions19 {
  typeIdentifier: string;
  typeString: string;
}

export interface InitialValue {
  arguments?: Argument14[];
  expression: Expression8;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  kind?: string;
  lValueRequested: boolean;
  nameLocations?: string[];
  names?: string[];
  nodeType: string;
  src: string;
  tryCall?: boolean;
  typeDescriptions: TypeDescriptions24;
  memberLocation?: string;
  memberName?: string;
}

export interface Argument14 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions20;
}

export interface TypeDescriptions20 {
  typeIdentifier: string;
  typeString: string;
}

export interface Expression8 {
  argumentTypes?: ArgumentType3[];
  id: number;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  lValueRequested?: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions21;
  typeName?: TypeName4;
  name?: string;
  overloadedDeclarations?: string[];
  referencedDeclaration?: number;
}

export interface ArgumentType3 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions21 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName4 {
  baseType: BaseType2;
  id: number;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions23;
}

export interface BaseType2 {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  stateMutability: string;
  typeDescriptions: TypeDescriptions22;
}

export interface TypeDescriptions22 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions23 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions24 {
  typeIdentifier: string;
  typeString: string;
}

export interface Condition2 {
  commonType?: CommonType2;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  leftExpression?: LeftExpression2;
  nodeType: string;
  operator: string;
  rightExpression?: RightExpression2;
  src: string;
  typeDescriptions: TypeDescriptions27;
  prefix?: boolean;
  subExpression?: SubExpression;
}

export interface CommonType2 {
  typeIdentifier: string;
  typeString: string;
}

export interface LeftExpression2 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions25;
}

export interface TypeDescriptions25 {
  typeIdentifier: string;
  typeString: string;
}

export interface RightExpression2 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions26;
}

export interface TypeDescriptions26 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions27 {
  typeIdentifier: string;
  typeString: string;
}

export interface SubExpression {
  baseExpression: BaseExpression2;
  id: number;
  indexExpression: IndexExpression2;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions30;
}

export interface BaseExpression2 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions28;
}

export interface TypeDescriptions28 {
  typeIdentifier: string;
  typeString: string;
}

export interface IndexExpression2 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions29;
}

export interface TypeDescriptions29 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions30 {
  typeIdentifier: string;
  typeString: string;
}

export interface TrueBody {
  id: number;
  nodeType: string;
  src: string;
  statements: Statement8[];
}

export interface Statement8 {
  assignments?: number[];
  declarations?: Declaration2[];
  id: number;
  initialValue?: InitialValue2;
  nodeType: string;
  src: string;
  expression?: Expression9;
}

export interface Declaration2 {
  constant: boolean;
  id: number;
  mutability: string;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: string;
  typeDescriptions: TypeDescriptions31;
  typeName: TypeName5;
  visibility: string;
}

export interface TypeDescriptions31 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName5 {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions32;
}

export interface TypeDescriptions32 {
  typeIdentifier: string;
  typeString: string;
}

export interface InitialValue2 {
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  operator: string;
  prefix: boolean;
  src: string;
  subExpression: SubExpression2;
  typeDescriptions: TypeDescriptions34;
}

export interface SubExpression2 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions33;
}

export interface TypeDescriptions33 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions34 {
  typeIdentifier: string;
  typeString: string;
}

export interface Expression9 {
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  leftHandSide: LeftHandSide;
  nodeType: string;
  operator: string;
  rightHandSide: RightHandSide;
  src: string;
  typeDescriptions: TypeDescriptions39;
}

export interface LeftHandSide {
  baseExpression: BaseExpression3;
  id: number;
  indexExpression: IndexExpression3;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions37;
}

export interface BaseExpression3 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions35;
}

export interface TypeDescriptions35 {
  typeIdentifier: string;
  typeString: string;
}

export interface IndexExpression3 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions36;
}

export interface TypeDescriptions36 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions37 {
  typeIdentifier: string;
  typeString: string;
}

export interface RightHandSide {
  id: number;
  name?: string;
  nodeType: string;
  overloadedDeclarations?: string[];
  referencedDeclaration?: number;
  src: string;
  typeDescriptions: TypeDescriptions38;
  hexValue?: string;
  isConstant?: boolean;
  isLValue?: boolean;
  isPure?: boolean;
  kind?: string;
  lValueRequested?: boolean;
  value?: string;
}

export interface TypeDescriptions38 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions39 {
  typeIdentifier: string;
  typeString: string;
}

export interface Body4 {
  id: number;
  nodeType: string;
  src: string;
  statements: Statement9[];
}

export interface Statement9 {
  expression: Expression10;
  id: number;
  nodeType: string;
  src: string;
}

export interface Expression10 {
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  leftHandSide: LeftHandSide2;
  nodeType: string;
  operator: string;
  rightHandSide: RightHandSide2;
  src: string;
  typeDescriptions: TypeDescriptions46;
}

export interface LeftHandSide2 {
  baseExpression: BaseExpression4;
  id: number;
  indexExpression: IndexExpression4;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions42;
}

export interface BaseExpression4 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions40;
}

export interface TypeDescriptions40 {
  typeIdentifier: string;
  typeString: string;
}

export interface IndexExpression4 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions41;
}

export interface TypeDescriptions41 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions42 {
  typeIdentifier: string;
  typeString: string;
}

export interface RightHandSide2 {
  baseExpression: BaseExpression5;
  id: number;
  indexExpression: IndexExpression5;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions45;
}

export interface BaseExpression5 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions43;
}

export interface TypeDescriptions43 {
  typeIdentifier: string;
  typeString: string;
}

export interface IndexExpression5 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions44;
}

export interface TypeDescriptions44 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions45 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions46 {
  typeIdentifier: string;
  typeString: string;
}

export interface InitializationExpression {
  assignments: number[];
  declarations: Declaration3[];
  id: number;
  initialValue: InitialValue3;
  nodeType: string;
  src: string;
}

export interface Declaration3 {
  constant: boolean;
  id: number;
  mutability: string;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: string;
  typeDescriptions: TypeDescriptions47;
  typeName: TypeName6;
  visibility: string;
}

export interface TypeDescriptions47 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName6 {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions48;
}

export interface TypeDescriptions48 {
  typeIdentifier: string;
  typeString: string;
}

export interface InitialValue3 {
  hexValue: string;
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  kind: string;
  lValueRequested: boolean;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions49;
  value: string;
}

export interface TypeDescriptions49 {
  typeIdentifier: string;
  typeString: string;
}

export interface LoopExpression {
  expression: Expression11;
  id: number;
  nodeType: string;
  src: string;
}

export interface Expression11 {
  id: number;
  isConstant: boolean;
  isLValue: boolean;
  isPure: boolean;
  lValueRequested: boolean;
  nodeType: string;
  operator: string;
  prefix: boolean;
  src: string;
  subExpression: SubExpression3;
  typeDescriptions: TypeDescriptions51;
}

export interface SubExpression3 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions50;
}

export interface TypeDescriptions50 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeDescriptions51 {
  typeIdentifier: string;
  typeString: string;
}

export interface Parameters {
  id: number;
  nodeType: string;
  parameters: Parameter2[];
  src: string;
}

export interface Parameter2 {
  constant: boolean;
  id: number;
  mutability: string;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: string;
  typeDescriptions: TypeDescriptions52;
  typeName: TypeName7;
  visibility: string;
}

export interface TypeDescriptions52 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName7 {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  typeDescriptions: TypeDescriptions53;
}

export interface TypeDescriptions53 {
  typeIdentifier: string;
  typeString: string;
}

export interface Modifier {
  arguments: Argument15[];
  id: number;
  kind: string;
  modifierName: ModifierName;
  nodeType: string;
  src: string;
}

export interface Argument15 {
  id: number;
  name: string;
  nodeType: string;
  overloadedDeclarations: string[];
  referencedDeclaration: number;
  src: string;
  typeDescriptions: TypeDescriptions54;
}

export interface TypeDescriptions54 {
  typeIdentifier: string;
  typeString: string;
}

export interface ModifierName {
  id: number;
  name: string;
  nameLocations: string[];
  nodeType: string;
  referencedDeclaration: number;
  src: string;
}

export interface ReturnParameters {
  id: number;
  nodeType: string;
  parameters: Parameter3[];
  src: string;
}

export interface Parameter3 {
  constant: boolean;
  id: number;
  mutability: string;
  name: string;
  nameLocation: string;
  nodeType: string;
  scope: number;
  src: string;
  stateVariable: boolean;
  storageLocation: string;
  typeDescriptions: TypeDescriptions55;
  typeName: TypeName8;
  visibility: string;
}

export interface TypeDescriptions55 {
  typeIdentifier: string;
  typeString: string;
}

export interface TypeName8 {
  id: number;
  name?: string;
  nodeType: string;
  src: string;
  stateMutability?: string;
  typeDescriptions: TypeDescriptions56;
  baseType?: BaseType3;
}

export interface TypeDescriptions56 {
  typeIdentifier: string;
  typeString: string;
}

export interface BaseType3 {
  id: number;
  name: string;
  nodeType: string;
  src: string;
  stateMutability: string;
  typeDescriptions: TypeDescriptions57;
}

export interface TypeDescriptions57 {
  typeIdentifier: string;
  typeString: string;
}

export interface Overrides {
  id: number;
  nodeType: string;
  overrides: string[];
  src: string;
}

export interface Compiler {
  name: string;
  version: string;
}

export interface Networks {
  "5777": N5777;
}

export interface N5777 {
  events: Events;
  links: Links;
  address: string;
  transactionHash: string;
}

export interface Events {}

export interface Links {}

export interface Devdoc {
  kind: string;
  methods: Methods;
  version: number;
}

export interface Methods {}

export interface Userdoc {
  kind: string;
  methods: Methods2;
  version: number;
}

export interface Methods2 {}
