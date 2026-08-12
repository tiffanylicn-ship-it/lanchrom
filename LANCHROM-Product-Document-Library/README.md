# LANCHROM™ 产品资料库项目

这是 LANCHROM 产品分类、等级、技术资料与网站附件的统一资料源。以后新增产品、修改等级、更新包装或重新生成 TDS / Specification 时，应先更新本项目，再同步到网站，避免网页、PDF 和销售资料出现不同版本。

## 项目包含内容

- `data/product-catalog.json`：网站全部独立产品的主数据。
- `data/product-document-index.csv`：产品、分类、页面地址和附件地址索引。
- `knowledge-base/`：产品分类、等级解释、文件治理和欧洲市场资料规则。
- `templates/`：TDS、产品规格书、COA、SDS 标准结构。
- `workflows/`：新增产品和文件更新流程。
- `scripts/`：主数据导出、PDF 生成和网站同步脚本。
- `output/pdf/`：按 `产品分类 / 产品 slug` 保存的正式网站附件。

当前基线包含 341 个去重后的独立产品、341 份 TDS 和 341 份 Product Specification Summary。产品数量以“最终分类 + 产品 slug”的独立网站页面为准。

## 统一原则

1. 一个化学品保留一个主产品页，不因包装尺寸重复建页。
2. 同一化学品的包装尺寸统一写入一份 TDS 和一份规格书。
3. 多等级产品在主产品页和资料中统一列出可供应等级。
4. TDS 与规格书可以公开下载；COA 必须按批次提供；SDS 必须按产品、市场与语言管理。
5. 未经确认的数值不得补写。没有批准限值时使用“Grade-specific controlled specification”并要求客户索取受控版本。
6. 网站附件、下载中心和产品页面必须引用同一文件路径。

## 日常使用方式

1. 在网站产品数据中新增或修改产品。
2. 运行 `scripts/rebuild-library.sh`。
3. 检查输出数量、附件索引与抽样渲染结果。
4. 构建网站，确认没有断开的附件链接。

如需指定网站或 Python 路径，可在运行前设置 `LANCHROM_SITE_DIR` 与 `LANCHROM_PYTHON_BIN`。PDF 生成脚本已保存在本资料库中，网站项目只负责导出最新产品主数据。

## 文件状态

- 下载版 TDS / Specification：Reference Summary，用于选型和初步资格审查。
- Current Approved Specification：受控文件，按请求提供。
- COA：批次文件，不能使用模板替代。
- SDS：法规文件，需要根据目的市场、语言和最新分类信息维护。
